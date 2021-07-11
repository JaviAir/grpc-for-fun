package main
import (
	"context"
	"log"
	"net"
	// "errors"
	"google.golang.org/grpc"
    pb "./protoBuffs"
	"fmt"
	"time"
)

const (
	port = "50051"
)

// server is used to implement helloworld.UsersServer.
type server struct {
	pb.UnimplementedStocksServer
}

// SayHello implements helloworld.UsersServer
// func (s *server) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
// 	log.Printf("Received: %v", in.GetName())
// 	return &pb.HelloReply{Message: "Hello " + in.GetName()}, nil
// }

func (s *server) GetStockBySymbol(ctx context.Context, in *pb.StockSymbol) (*pb.TheStock, error) {
	lclUser := &pb.TheStock{Symbol:"GME", Name: "GameStop", Price: 42}
	log.Printf("hit the get user server function %s" ,  in)
	return lclUser, nil
}

func (s *server) GetStockPrice(in *pb.StockSymbol, srv pb.Stocks_GetStockPriceServer) error {
	log.Printf("hit the get stock price server function %s" ,  in)
	
	// numberay := [5]int32{1, 2, 3, 4, 5}
	for i,_ := range [5]int32{} {
		resp := pb.TheStockPrice{Price: 69 + int32(i)}
		srv.Send(&resp)
		time.Sleep(1 * time.Second)
	}

	return nil
}

func main() {
	log.Printf("go grpc server Listening on port 50051")
	lis, err := net.Listen("tcp", fmt.Sprintf("localhost:%s", port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterStocksServer(s, &server{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
	
}