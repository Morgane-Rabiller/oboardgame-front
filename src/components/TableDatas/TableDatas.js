import "../Library/Library.scss";

const TableDatas = ({ name, playerMin, playerMax, type, age, time}) => {
    
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

export default TableDatas;