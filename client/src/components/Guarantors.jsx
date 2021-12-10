import React, {useEffect, useState} from 'react';
import "antd/dist/antd.css";
import { Table, Button, Modal, Input } from "antd";
import {useDispatch, useSelector} from "react-redux";
import { fetchGuarantors, deleteGuarantor, updateGuarantor, createGuarantor } from "../actions/guarantors";
import {EditOutlined, DeleteOutlined, SearchOutlined, UserAddOutlined} from "@ant-design/icons";


const Guarantors = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCreating, setIsCreating] = useState(null);
  const [editedGuarantor, setEditedGuarantor] = useState(null);
  const [newdGuarantor, setNewdGuarantor] = useState(null);
  const [accountNoInput, setAccountNoInput] = useState("");
  const [id, setId]= useState("");



    const dispatch = useDispatch();

  // Retrieve guarantor data when webpage loaded or guarantor list changes
  const [guarantors, setGuarantors] = useState([]);
  const guarantorList = useSelector((state) => state.guarantors);
  useEffect(() => {
    dispatch(fetchGuarantors());
    setGuarantors(guarantorList);
  }, [dispatch, guarantorList]);

  
  
// Define column headings of the antd table
const columns = [
  {
    title : "id",
    dataIndex : "id",
    key : "key"
  }, 
  {
    title : "Name",
    dataIndex : "Name",
    filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
      return (
      <>
      <Input 
      autoFocus ={true} 
      placeholder="Search by name"
      value ={selectedKeys[0]}
      onPressEnter = {() =>{
        confirm();

      }}
      onBlur = {() => {
        confirm();

      }}
      onChange = {(e) => {
        
        setSelectedKeys(e.target.value ? [e.target.value] : []);
        confirm({closedDropdown:false});

      }}
      ></Input>
      <Button 
      type="primary" onClick={() => {
        confirm();
      }} > 
      Search
      </Button>

      <Button 
      type="danger" onClick={() => {
        clearFilters();
        confirm({closedDropdown:false})
      }} > 
      Clear
      </Button>
      </>
      );
    },

   filterIcon: () => {
     return <SearchOutlined/>
   },

   onFilter : (value, record) =>{
    return record.Name.toLowerCase().includes(value.toLowerCase());

  }
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
    // Render edit and delete icons on the table
    title : "" ,
    key : "actions",
    render : (record) =>{
      return (
      <>
      {/* Retrieve specific record from the table to 
      edited guarantor state when user click edit icon of this row 
      and set editing flag to true to display modal window  */}
      <EditOutlined onClick={()=>{
       setId(record.id)
       setEditedGuarantor(record);
       setIsEditing(true);
      }}/>

      {/* Retrieve id of specific record of the table to 
      id state when user click delete icon of this row 
      and set deleting flag to true to display modal window */}
      <DeleteOutlined onClick={() =>{ 
        setId(record.id);
        setIsDeleting(true);
      }} 
      style={{color:"red", marginLeft:20}} 
      alt="Delete guarantor"
      />
      <UserAddOutlined alt="View guarantees" style={{marginLeft:20}}/>
      </>
      );

    }
  },
 

  
];

 /* 
 This function call delete action of redux and pass id 
 retrieved from particular row of antd table
 */
 const removeGuarantor = (id) => {
  dispatch(deleteGuarantor(id));
}

/* 
 This function call edit action of redux and pass id 
 and row record retrieved from particular row of antd table
 */
const editGuarantor = (id, updatedGuarantor) => {
  setEditedGuarantor({...updatedGuarantor})
  dispatch(updateGuarantor(id, editedGuarantor));
}

/* 
 This function call create action of redux
 */
const createNewGuarantor = (updatedGuarantor) => {

  setEditedGuarantor({...newdGuarantor})
  dispatch(createGuarantor(newdGuarantor));
}

    return (
      <>
        <Button
         onClick = {() => {
           
           setIsCreating(true);
           setNewdGuarantor("");
         }}
        >
          Add new guarantor
        </Button>

        <Table 
        dataSource={guarantors}
        columns={columns}
        style={{display:"flex", flex:1}}
        >
        
        </Table>

        {/* Modal window for editing guarantor data */}
        <Modal
           title = "Editing Guarantor"
           okText = "Save"
           visible ={isEditing}
           onCancel = {() => { 
            setIsEditing(false);
           }}
           onOk = {() => {
            editGuarantor(id, editedGuarantor); 
            setIsEditing(false);
           }}
        >
          <Input value={editedGuarantor?.Name} onChange={(e)=>{
           setEditedGuarantor({...editedGuarantor, Name: e.target.value})
         }} placeholder="Enter gurantor's name"></Input>
         <Input value={editedGuarantor?.AccountNo} onChange={(e)=>{
           setEditedGuarantor({...editedGuarantor, AccountNo: e.target.value})
         }} placeholder="Enter gurantor's account number"></Input>
         <Input value={editedGuarantor?.Address} onChange={(e)=>{
           setEditedGuarantor({...editedGuarantor, Address: e.target.value})
         }} placeholder="Enter gurantor's phone number"></Input>
        <Input value={editedGuarantor?.PhoneNo} onChange={(e)=>{
           setEditedGuarantor({...editedGuarantor, PhoneNo: e.target.value})
         }} placeholder="Enter gurantor's address"></Input>
         <Input value={editedGuarantor?.Salary} onChange={(e)=>{
           setEditedGuarantor({...editedGuarantor, Salary: e.target.value})
         }} placeholder="Enter gurantor's salary"></Input>

         
        </Modal>

       

       {/* Modal Window for creating guarantor */}
       <Modal
           title = "Create Guarantor"
           okText = "Save"
           visible ={isCreating}
           onCancel = {() => { 
            setIsCreating(false);
           }}
           onOk = {() => {
            //const filteredData = cryptoList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
           const filteredData = guarantors.filter((guarantor) => guarantor.AccountNo === accountNoInput)
           console.log(filteredData);
             if (filteredData.length > 0) {
               Modal.confirm({
                title: "This guarantor already exist",
                cancelButtonProps: {style:{display:"none"}}
      
               })
             } else {
              createNewGuarantor(newdGuarantor); 
              setIsCreating(false);
             }
           
           }}
        >
         
         <Input  onChange={(e)=>{
           setNewdGuarantor({...newdGuarantor, Name: e.target.value})
         }} placeholder="Enter gurantor's name" value={newdGuarantor?.Name}></Input>
         <Input  onChange={(e)=>{
           setNewdGuarantor({...newdGuarantor, AccountNo: e.target.value})
         }} 
         placeholder="Enter gurantor's account number" 
         value={newdGuarantor?.AccountNo} onInput={e => setAccountNoInput(e.target.value)}></Input>
         <Input  onChange={(e)=>{
           setNewdGuarantor({...newdGuarantor, Address: e.target.value})
         }} placeholder="Enter gurantor's address" value={newdGuarantor?.Address}></Input>
        <Input  onChange={(e)=>{
           setNewdGuarantor({...newdGuarantor, PhoneNo: e.target.value})
         }} placeholder="Enter gurantor's phone number" value={newdGuarantor?.PhoneNo}></Input>
         <Input  onChange={(e)=>{
           setNewdGuarantor({...newdGuarantor, Salary: e.target.value})
         }} placeholder="Enter gurantor's salary" value={newdGuarantor?.Salary}></Input>
        </Modal>

        {/*  Modal window for deleting guarator */}
        <Modal
           title  = "Are you sure you want to delete this guarantor record"
           visible = {isDeleting}
           okText = "Yes"
           okType = "danger"
           onOk   =  {()=> {
            /* Delete guarantor and close modal window  */
             removeGuarantor(id);
             setIsDeleting(false);
           }}
           onCancel = {() => {
            //  Close Modal window
             setIsDeleting(false);
           }}
        >
       </Modal>
      </>
        
    );
}

export default Guarantors
