




<Input  onChange={(e)=>{
  setNewGuarantee({...newGuarantee, Name: e.target.value})
}} placeholder="Enter gurantor's name" value={newGuarantee?.Name}></Input>
<Input  onChange={(e)=>{
  setNewGuarantee({...newGuarantee, AccountNo: e.target.value})
}} 
placeholder="Enter gurantor's account number" 
value={newGuarantee?.AccountNo} onInput={e => setAccountNoInput(e.target.value)}></Input>
<Input  onChange={(e)=>{
  setNewGuarantee({...newGuarantee, PhoneNo: e.target.value})
}} placeholder="Enter gurantor's phone number" value={newGuarantee?.PhoneNo}></Input>
<Input  onChange={(e)=>{
  setNewGuarantee({...newGuarantee, Address: e.target.value})
}} placeholder="Enter gurantor's address" value={newGuarantee?.Address}></Input>
<Input  onChange={(e)=>{
  setNewGuarantee({...newGuarantee, LoanAmount: e.target.value})
}} placeholder="Enter loan  amount here" value={newGuarantee?.LoanAmount}></Input>
<Input  onChange={(e)=>{
  setNewGuarantee({...newGuarantee, Repayment: e.target.value})
}} placeholder="Enter loan  amount here" value={newGuarantee?.Repayment}></Input>
<DatePicker format={"YYYY-MM-DD"}   onChange={(date)=>{
 const formattedDate =  moment(date.toDate(),"YYYY-MM-DD")
  setNewGuarantee({...newGuarantee, StartDate:formattedDate})
}} placeholder="Enter start  date here" value={newGuarantee?.StartDate}></DatePicker>

<DatePicker format={"YYYY-MM-DD"}  onChange={(date )=>{
 const formattedDate =  moment(date.toDate(),"YYYY-MM-DD")
  setNewGuarantee({...newGuarantee, EndDate:formattedDate})
}} placeholder="Enter end  date here" value={newGuarantee?.EndDate}></DatePicker>     