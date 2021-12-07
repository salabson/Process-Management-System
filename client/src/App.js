
import './App.css';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchGuarantors } from "./actions/guarantors";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGuarantors());
  }, [dispatch]);

  const guarantors = useSelector((state) => state.guarantors);
  console.log(guarantors);

  return(
    <div>{guarantors?.map((guarantor)=> (<div>{guarantor.Name}</div>))}</div>
  );

}

export default App;
