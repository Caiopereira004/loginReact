import styles from './styles.module.css';

type DefaultInputProps = {
    icon: React.ElementType;
    type?: string;
    placeholder?: string;
}

export function DefaultInput({icon: Icon, type= 'text', placeholder}: DefaultInputProps){
    return(
        <>
        <div className={styles.defaultInput}>
            <Icon />
            <input className={styles.Input}type={type} placeholder={placeholder}/>
        </div>
        </>
    )
}

export default DefaultInput;