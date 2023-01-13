import style from'./form.module.css'

export const Form = ({namez}) => {

    const count = 1
    const name = 'xxx'

    return <form className={style.form}>
        <p >Count: {count}</p>
        <p>Name const: {name}</p>
        <p>Name props: {namez}</p>
        <input type="text" />
        <button type="button">Click</button>
    </form>
}