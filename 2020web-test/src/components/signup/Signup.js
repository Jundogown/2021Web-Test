import react, { useState } from 'react';
import './Signup.css';

const Signup = ({ id, pw, name, phone, email, onChange, onCreate }) => {

    return(
        <div className="Signup-wrap">
            <div className="Signup-inputBox-wrap">
                <h3>회원가입</h3>
                <div className="Signup-input-wrap">
                    <span>ID</span>
                    <input name="id" type="text" onChange={onChange} value={id}></input>
                </div>
                <div className="Signup-input-wrap">
                    <span>PW</span>
                    <input name="pw" type="text" onChange={onChange} value={pw}></input>
                </div>
                <div className="Signup-input-wrap">
                    <span>Name</span>
                    <input name="name" type="text" onChange={onChange} value={name}></input>
                </div>
                <div className="Signup-input-wrap">
                    <span>Phone</span>
                    <input name="phone" type="text" onChange={onChange} value={phone}></input>
                </div>
                <div className="Signup-input-wrap">
                    <span>Email</span>
                    <input name="email" type="email" onChange={onChange} value={email}></input>
                </div>
            </div>
            <div className="Signup-button-wrap">
                <button onClick={onCreate}>확인</button>
                <button>취소</button>
            </div>
            <div className="padding"></div>
            <div>
                전체회원 조회
            </div>
        </div>
    )
}

export default Signup;