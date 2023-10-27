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
          "There are many fruits that were found on the recently discovered planet Goocrux. There are neoskizzles that grow there, which are purple and taste like candy. There are also loheckles, which are a grayish blue fruit and are very tart, a little bit like a lemon. Pounits are a bright green color and are more savory than sweet. There are also plenty of loopnovas which are a neon pink flavor and taste like cotton candy. Finally, there are fruits called glowls, which have a very sour and bitter taste which is acidic and caustic, and a pale orange tinge to them." +
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
