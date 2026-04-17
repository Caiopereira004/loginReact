import styles from './styles.module.css';

type DefaultButtonProps = {
    children: React.ReactNode;
    type?: "button" | "submit";
}

export function DefaultButton({children, type = "button"}: DefaultButtonProps){
    return(
        <>
            <button type={type} className={styles.defaultButton}>{children}</button>
        </>
    )
}

export default DefaultButton;