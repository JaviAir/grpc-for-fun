import { StockSymbol, theStock } from "./protoBuffs/myStockService_pb";
import {StocksClient} from "./protoBuffs/myStockService_grpc_pb";
import { credentials } from "grpc";

  const client = new StocksClient(
    "localhost:50051", credentials.createInsecure());
  
    const noop = () => {};
  
    const req = new StockSymbol();
    req.setSymbol("GME");

    client.getStockBySymbol(req, (err, res) => {
        console.log('plase work lmao');
        if (err) console.log('err: '+ err)
        else console.log('res: '+res);
    });
    

    client.getStockPrice(req, (err, res) => {
        if (err) console.log('err: '+ err)
        else console.log('stockPrice: '+res);
    })
    .on("data", (data) => console.log('heres the data: '+data))
    .on("end", () => console.log('stream has ended!'));