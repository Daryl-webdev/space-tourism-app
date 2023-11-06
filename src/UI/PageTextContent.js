import classes from './PageTextContent.module.css'

const PageTextContent = ({ children }) => {

    return <div className={classes.home__content}>
        {children}
    </div>
}

export default PageTextContent;