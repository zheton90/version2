
export const Child = ({name, handelCange}) => {

    const handelClick = () => {handelCange((prevCount) => prevCount + 1)}

    return<>
    <p>{name}</p>
    <button onClick={handelClick}>+1</button>
    </>
}