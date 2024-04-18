import React from "react";

type ListProps = {
    children?: React.ReactNode;
}

const SideCategory = ({ children }: ListProps) => {
    return (
        <div className="container text-center" id="sideCategory">
            <nav className="nav flex-column">
                <div className="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" autoComplete="on" checked></input>
                    <label className="btn btn-outline-danger">入室記録リスト</label>
                    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" autoComplete="off"></input>
                    <label className="btn btn-outline-danger" >社員リスト</label>
                </div>
            </nav>
        </div>
    );
}

export default SideCategory;
