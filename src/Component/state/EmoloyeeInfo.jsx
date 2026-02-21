import React,{useState} from 'react'

function EmoloyeeInfo() {
    fullName:" ",
    phone:" ",
    skill:[],
    country:" ",
}
    const handleEmployee=(e)=>{
        const[name,value,type,checked]=e.target;
        StylePropertyMap(())
    }
  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" name="fullName" value={emp.fullName} onChange={handleEmployee}></input>
        <br/> <b/> <br/>
        <label>Phone Number</label>
        <input type="text" name="phone" value={emp.phone} onChange={handleEmployee}></input>
        <br/> <b/> <br/>
        <label>Skills</label>
        <input type="checkBox" name="skills" value={"Java"} onChange={handleEmployee}></input>
        <input type="checkBox" name="skills" value={"Python"} onChange={handleEmployee}></input>
        <input type="checkBox" name="skills" value={"C++"} onChange={handleEmployee}></input>
        <br/> <b/> <br/>
        <label>Country</label>
        <select name="Country">
            <option value={""}>select</option>
            <option value={"India"}>India</option>
            <option value={"USA"}>USA</option>
        </select>
      </form>
    </div>
  )

export default EmoloyeeInfo
