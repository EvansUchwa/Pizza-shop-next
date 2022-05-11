export function handleFieldChange(event, setFieldValue) {
    const value = event.target.value;
    const name = event.target.name;
    setFieldValue(value)
}

export function handleFormValuesChange(event, formValues, setFormValues) {
    const value = event.target.value;
    const name = event.target.name;
    setFormValues({ ...formValues, [name]: value })

}

export const getError = (fieldName, errors) => {
    const error = errors.filter(item => item.name == fieldName);
    if (error.length > 0) {
        return <span className="fieldError" >{error[0].message}</span>
    }
}
export const handleFieldChangeAndSearch = (event,
    userInfo, setUserInfo,
    errors, setErrors,
    searchObjKey,
    arraySearch, setArrayResult) => {
    const name = event.target.name;
    const value = event.target.value;
    const suggestionBox = event.currentTarget.nextElementSibling;

    document.querySelectorAll('.fs-suggestionList').forEach(element => {
        if (element != suggestionBox) {
            element.style.display = 'none'
            suggestionBox.style.display = 'flex'
        } else {
            element.style.display = 'flex'
        }
    });


    const copyArray = arraySearch;
    const filter = copyArray.filter(item => item[searchObjKey].toLowerCase().includes(value.toLowerCase()))

    setArrayResult(filter)
    setUserInfo({ ...userInfo, [name]: value })
}


