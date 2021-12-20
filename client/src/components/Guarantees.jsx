import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Row} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {getGuaranteesByGuarantorId} from "../actions/guarantee";


const Guarantees = ({guarantorId}) =>{

    const dispatch = useDispatch();

    const guaranteeList = useSelector((state) => state.guarantees);

    dispatch(getGuaranteesByGuarantorId(guarantorId));

 console.log("From guarantee i am working", guaranteeList); 
    return(
        <>
        <Row>
        {guaranteeList?.map((guarantee) => (
        
         <Col key={guarantee.id} >   
        <Card
        title = {`${guarantee.Name} ${guarantee.AccountNo}`}
        >
            <p>Loan Amount: {guarantee.LoanAmount}</p>
            <p>Repayment: {guarantee.Repayment}</p>
            <p>Start Date: {guarantee.StartDate}</p>
            <p>End Date: {guarantee.EndDate}</p>
            <p>Status: {"Performing"}</p>
        </Card>
        </Col>
        ))}
        </Row>
        </>
    );

}

export default Guarantees;