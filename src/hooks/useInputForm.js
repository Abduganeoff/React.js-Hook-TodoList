import { useState } from 'react'

export default function useInputForm(initialValue) {
    const [value, setState] = useState(initialValue);

    const handleChange = e => {
        setState(e.target.value);
    }

    const reset = () => {
        setState('');
    }
    return [value, handleChange, reset];
}
