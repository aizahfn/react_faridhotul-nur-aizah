import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const ChatBot = () => {
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:
          "Black-on-black ware is a 20th- and 21st-century pottery tradition developed by the Puebloan Native American ceramic artists in Northern New Mexico. Traditional reduction-fired blackware has been made for centuries by pueblo artists. Black-on-black ware of the past century is produced with a smooth surface, with the designs applied through selective burnishing or the application of refractory slip. Another style involves carving or incising designs and selectively polishing the raised areas. For generations several families from Kha'po Owingeh and P'ohwhóge Owingeh pueblos have been making black-on-black ware with the techniques passed down from matriarch potters. Artists from other pueblos have also produced black-on-black ware. Several contemporary artists have created works honoring the pottery of their ancestors." +
          prompt,
        temperature: 0.5,
        max_tokens: 100,
      });
      setResult(response.data.choices[0].text);
      setShowAlert(true);
      setShowResult(true);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="main-container">
        <div className="ai-form">
          <div className="input-group">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Isikan pesan anda"
              className="input-field"
            />
          </div>
          <button
            onClick={handleClick}
            disabled={loading || prompt.length === 0}
            className="generate-button"
          >
            {loading ? <>Generating...&nbsp;</> : <>Generate&nbsp;</>}
          </button>
        </div>
        {showAlert && (
          <div className="alert success-alert">
            Teks AI berhasil dihasilkan!
          </div>
        )}
        {showResult && (
          <div className="result-container">
            <div className="result-header" onClick={() => setShowResult(false)}>
              Hasil
            </div>
            <div className="result-text">{result}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
