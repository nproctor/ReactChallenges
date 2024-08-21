import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
    symbol: string,
    row : number,
    column: number,
    handleClick: (row: number, column: number) => void,
}

const Square = ({symbol, row, column, handleClick } : Props) => { 
        
    return (
        <StyledTableData onClick={() => handleClick(row, column)}> 
            {symbol}
        </StyledTableData>
    )
}

const StyledTableData = styled.td`
    background-color: #ffffff;
    border-radius: 5px;
    width: 50px;
    height: 50px;
    margin: 2px;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    vertical-align: center;
`

export default Square;