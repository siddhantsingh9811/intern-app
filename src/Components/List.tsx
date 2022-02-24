import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListElement from './listElement';
interface IListProps {
}

interface IState{
    data: {
        img: string;
        amount: number;
        asset: string;
        chain: {
            img: string;
            name: string;
        };
        referral_earnings: number;
        state: string;
        type: string;
        user: string;
    }[]
}

const List: React.FunctionComponent<IListProps> = (props) => {

    const [data,setData] = useState<IState["data"]>([])
    useEffect(()=>{
        var config:any = {
            method: 'get',
            url: 'https://raw.githubusercontent.com/akshita151199/APIs/main/data',
            headers: { }
          };
          
          const getData = axios(config).then(response=>{setData(response.data.data)})
    },[])
    
    return (
      <div className="list">
          <div className="tabs">
              <div className="tab triggered">First Tab</div>
              <div className="tab">Second Tab</div>
          </div>
          <div className="header">
              <div className="heading">ASSET</div>
              <div className="heading">AMOUNT</div>
              <div className="heading">USER ACCOUNT</div>
              <div className="heading">REFFERAL EARNING</div>
          </div>
          <div className="elements">
            {data.map(item=>{
                return <ListElement data={item} />
            })}

          </div>
      </div>
  );
};

export default List;
