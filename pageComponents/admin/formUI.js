import { Form, InputCheckBox, InputFile, InputText, TextArea } from "../../globalComponents/Form"

export const ProductFormFields = ({ props }) => {
    const { formValues, setFormValues } = props;
    return <>
        <InputFile props={{
            name: "img",
            label: "Photo de la pizza",
            formValues, setFormValues,
            maxFiles: 1, width: "90px", height: "90px"
        }} />
        <InputText props={{
            name: "name", ph: "Italiano...",
            label: "Nom de la pizza",
            formValues, setFormValues
        }} />
        <InputCheckBox props={{
            name: "sizes", choices: [
                { label: "Petite", value: "petite" },
                { label: "Moyenne", value: "moyenne" },
                { label: "Grande", value: "grande" },
            ],
            label: "Taille disponible",
            formValues, setFormValues,
        }} />
        {
            formValues.sizes.includes('petite') && <InputText props={{
                name: "small_price", ph: "0€",
                label: "Prix(petite taille)",
                formValues, setFormValues
            }} />
        }

        {
            formValues.sizes.includes('moyenne') && <InputText props={{
                name: "medium_price", ph: "2€",
                label: "Prix(moyenne taille)",
                formValues, setFormValues
            }} />
        }

        {
            formValues.sizes.includes('grande') && <InputText props={{
                name: "big_price", ph: "3€",
                label: "Prix(grande taille) ",
                formValues, setFormValues
            }} />
        }




        <TextArea props={{
            name: "description", ph: "Cette ppizza est...", label: "Description",
            formValues, setFormValues
        }} />
    </>
}