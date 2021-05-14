import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = (props) => {
  const [translated, setTranslated] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(props.text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(props.text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [props.text]);
  
  useEffect(() => {

    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedTerm,
            source: "en",
            target: props.language.value,
            format: "text",
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();

  }, [debouncedTerm,props.language]);

  return <div className="ui header">{translated}</div>;

};

export default Convert;
