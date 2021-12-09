import { useEffect, useState } from 'react';
import sampleSize from 'lodash.samplesize';

type DecodingTextProps = {
    text: string,
    decodeTimeMs?: number,
    decodes?: number
}

const decodeTimeMs = 5000;
const decodes = 10;
const timePerDecode = decodeTimeMs / decodes;
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function codeText(text: string, percentageText: number): string {
    const charsCoded = Math.floor(text.length * percentageText);

    const indexes = [...Array(text.length).keys()];

    const charIndexesToChange = sampleSize(indexes, charsCoded);

    const textArray = Array.from(text);

    charIndexesToChange.forEach(index => {
        if (textArray[index] === ' ') {
            return;
        }

        const randomChar = sampleSize(chars, 1)[0];

        textArray[index] = randomChar;
    });

    return textArray.join('');
}

function DecodingText(props: DecodingTextProps) {
    const [currentText, setCurrentText] = useState(codeText(props.text, 1.0));

    useEffect(() => {

    }, []);

    return currentText;
}

export default DecodingText;
