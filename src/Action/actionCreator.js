import { set_data, set_file, set_text } from "./actionType";

export function commonHandler(e) {
    return { type: set_text, payload: e.target }
}

export function fileHandler(e) {
    let file = e.target.files[0];
    let url = URL.createObjectURL(file)
    let name = e.target.name;
    return ({ type: set_file, payload: { url, name } })
}

export function submitHandler(e) {
    e.preventDefault()
    return { type: set_data }

}