import "../Library/Library.scss";

const TableDataBoardgame = ({ name, playerMin, playerMax, type, age, time}) => {
    
    return (
        <>
            <td>{name}</td>
            <td>{playerMin} - {playerMax}</td>
            <td>{type}</td>
            <td>{age}+</td>
            <td>{time}</td>
        </>
    );
};

export default TableDataBoardgame;