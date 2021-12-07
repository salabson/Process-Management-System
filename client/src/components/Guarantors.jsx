import React, {useEffect, useState} from 'react';
import "antd/dist/antd.css";
import { Table, Button } from "antd";
import {useDispatch, useSelector} from "react-redux";
import { fetchGuarantors } from "../actions/guarantors";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";


const Guarantors = () => {

    const dispatch = useDispatch();

    const [guarantors, setGuarantors] = useState([]);

    const guarantorList = useSelector((state) => state.guarantors);

  useEffect(() => {
    dispatch(fetchGuarantors());
    setGuarantors(guarantorList);
  }, [dispatch, guarantorList]);

  
  

const columns = [
  {
    title : "id",
    dataIndex : "id",
    key : "key"
  }, 
  {
    title : "Name",
    dataIndex : "Name",
    key : "key"
  }, 

  {
    title : "Account No" ,
    dataIndex : "AccountNo",
    key : "key"
  }, 

  {
    title : "Address" ,
    dataIndex : "Address",
    key : "key"
  }, 
  {
    title : "Phone No" ,
    dataIndex : "PhoneNo",
    key : "key"
  }, 
  {
    title : "Salary" ,
    dataIndex : "Salary",
    key : "key"
  }, 

  {
    title : "created At" ,
    dataIndex : "createdAt",
    key : "key"
  }, 
  {
    title : "updated At" ,
    dataIndex : "updatedAt",
    key : "key"
  }, 
  {
    title : "" ,
    key : "actions",
    render : (record) =>{
      return (
      <>
      <EditOutlined />
      <DeleteOutlined style={{color:"red", marginLeft:20}} />
      </>
      )

    }
  }
];

    return (
      <>
        <Button>Add new guarantor</Button>
        <Table 
        dataSource={guarantors}
        columns={columns}
        >

        </Table>
      </>
        
    );
}

export default Guarantors
