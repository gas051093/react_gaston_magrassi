export const withLoading = (Component) => { 
    function ComponentWithLoading(props) { 
        if (!props.prod) { 
            return (
                <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="spinner-border " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            );
        }
        return (
            <Component {...props} />
        )
    }
    return ComponentWithLoading
}