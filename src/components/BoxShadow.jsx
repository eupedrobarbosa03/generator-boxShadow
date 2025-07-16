import { useState } from "react";
import classes from './BoxShadow.module.css';


const BoxShadow = () => {

    const [backgroundBoxShadow, setBackgroundBoxShadow] = useState("#ffffff");
    const [borderRadius, setBorderRadius] = useState(0);
    const [opacity, setOpacity] = useState(100);
    const [borderColor, setBorderColor] = useState("#000000");
    const [border, setBorder] = useState(0);
    const [offSetX, setOffSetX] = useState(0);
    const [offSetY, setOffSetY] = useState(0);
    const [blurRadius, setBlurRadius] = useState(0);
    const [shadowColor, setShadowColor] = useState("#ffffff");
    const [inset, setInset] = useState(false);

    const codeCss = 
    `
        .element {
            height: 250px;
            width: 250px;
            background-color: ${backgroundBoxShadow};
            border-radius: ${borderRadius}px;
            opacity: ${opacity / 100};
            border: ${border}px solid ${borderColor};
            box-shadow: ${offSetX}px ${offSetY}px ${blurRadius}px ${shadowColor} ${
                inset ? `inset` : ``
            };
        }
    `

    const handleBackgroundBoxShadow = (e) => setBackgroundBoxShadow(e.target.value);
    const handleBorderRadius = (e) => setBorderRadius(e.target.value);
    const handleOpacity = (e) => setOpacity(e.target.value);
    const handleBorder = (e) => setBorder(e.target.value);
    const handleBorderColor = (e) => setBorderColor(e.target.value);
    const handleOffSetX = (e) => setOffSetX(e.target.value);
    const handleOffSetY = (e) => setOffSetY(e.target.value);
    const handleBlurRadius = (e) => setBlurRadius(e.target.value);
    const handleShadowColor = (e) => setShadowColor(e.target.value);

    const changeMode = () => setInset(prevInset => !prevInset);

    const [messageCopy, setMessageCopy] = useState("Copiar");

    const copyCss = () => {
        navigator.clipboard.writeText(codeCss.trim())
        .then(() => {
            setMessageCopy("Copiado!")
            setTimeout(() => {
                setMessageCopy("Copiar")
            }, 3000)
        })
        .catch((error) => console.error("Erro ao copiar", error));
    }

    return (
        <>
            <main className={classes.main_container}>
                <section className={classes.section_settings_boxShadow}>
                    <div className={classes.box_settings}>
                        <div className={classes.container_backgroundColor_boxShadow}>
                            <p>Background Color</p>

                            <input type="color"
                            className={classes.input_color}
                            value={ backgroundBoxShadow}
                            onChange={handleBackgroundBoxShadow}/>
                            
                            <p>{backgroundBoxShadow}</p>
                            
                        </div>
                        <div className={classes.container_borderRadius_boxShadow}>
                            <p>Border Radius</p>

                            <input type="range"
                            value={borderRadius}
                            onChange={handleBorderRadius} 
                            max={150}/>

                            <p style={{textTransform: "lowercase"}}>{borderRadius}px</p>
                            
                        </div>

                        <div className={classes.container_opacity_boxShadow}>
                            <p>Opacity</p>

                            <input type="range"
                            value={opacity}
                            onChange={handleOpacity} 
                            min={0}
                            max={100}/>

                            <p style={{textTransform: "lowercase"}}>{opacity / 100}</p>
                            
                        </div>

                        <div className={classes.container_border_boxShadow}>
                            <p>Border</p>

                            <input type="range"
                            value={border}
                            onChange={handleBorder} 
                            min={0}
                            max={100}/>

                            <p style={{textTransform: "lowercase"}}>{border}px</p>
                            
                        </div>

                        <div className={classes.container_borderColor_boxShadow}>
                            <p>Border Color</p>

                            <input type="color"
                            value={borderColor}
                            onChange={handleBorderColor} 
                            className={classes.input_color}
                            />

                            <p style={{textTransform: "lowercase"}}>{borderColor}</p>
                            
                        </div>

                        <div className={classes.container_offSetX_boxShadow}>
                            <p>Offset X</p>

                            <input type="range"
                            value={offSetX}
                            onChange={handleOffSetX} 
                            min={-100}
                            max={100}
                            />

                            <p style={{textTransform: "lowercase"}}>{offSetX}px</p>
                            
                        </div>

                        <div className={classes.container_offSetY_boxShadow}>
                            <p>Offset y</p>

                            <input type="range"
                            value={offSetY}
                            onChange={handleOffSetY} 
                            min={-100}
                            max={100}
                            />

                            <p style={{textTransform: "lowercase"}}>{offSetY}px</p>
                            
                        </div>

                        <div className={classes.container_blurRadius_boxShadow}>
                            <p>blur radius</p>

                            <input type="range"
                            value={blurRadius}
                            onChange={handleBlurRadius} 
                            min={0}
                            max={250}
                            />

                            <p style={{textTransform: "lowercase"}}>{blurRadius}px</p>
                            
                        </div>

                        <div className={classes.container_shadowColor_boxShadow}>
                            <p>Shadow color</p>

                            <input type="color"
                            value={shadowColor}
                            onChange={handleShadowColor} 
                            className={classes.input_color}
                            />

                            <p style={{textTransform: "uppercase"}}>{shadowColor}</p>
                            
                        </div>

                        <div className={classes.container_mode_boxShadow}>
                            <p>INSET MODE</p>

                            <button onClick={() => changeMode()}>
                                {inset ? `NO INSET` : `INSET`}
                            </button>
                            
                        </div>

                    </div>

                    <div className={classes.box_settings}>
                        <pre>
                            <code>{codeCss}</code>
                        </pre>

                        <input type="button" value={messageCopy} onClick={() => copyCss()} />

                    </div>
                </section>
                <section className={classes.section_preview_boxShadow}>
                    <div className={classes.boxShadow} style={
                        {
                            borderRadius: `${borderRadius}px`,
                            backgroundColor: `${backgroundBoxShadow}`,
                            opacity: `${opacity / 100}`,
                            border: `${border}px solid ${borderColor}`,
                            boxShadow: `${offSetX}px ${offSetY}px ${blurRadius}px ${shadowColor} ${
                                inset ? `inset` : ``
                            }`
                        }
                    } ></div>
                </section>                
            </main>
        </>
    )
};

export default BoxShadow;