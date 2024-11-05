import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';



const ShaderGradientBG = () => {


    return (
    <>
        <div className="gradient-screen" />
        <ShaderGradientCanvas
            style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 0,
                opacity: 0.4
            }}
           

        >
            <ShaderGradient
                control='query'
                urlString='https://shadergradient-web.vercel.app/customize?animate=on&axesHelper=off&bgColor1=%23222222&bgColor2=%23333333&brightness=1&cAzimuthAngle=0&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23805758&color2=%23ca4e41&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=lobby&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1.5&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=3&uFrequency=0&uSpeed=0.1&uStrength=0.6&uTime=8&wireframe=false'
            // urlString='https://shadergradient-web.vercel.app/customize?animate=on&axesHelper=off&bgColor1=%23222222&bgColor2=%23333333&brightness=1&cAzimuthAngle=0&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=lobby&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1.5&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=3&uFrequency=0&uSpeed=0.1&uStrength=0.6&uTime=8&wireframe=false'
            />
        </ShaderGradientCanvas>
    </>
    )

}

export default ShaderGradientBG;