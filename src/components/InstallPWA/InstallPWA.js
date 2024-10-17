import React, { useEffect, useState } from "react";
import "./InstallPWA.scss"

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);
  const [position, setPosition] = useState({ top: 480, left: window.innerWidth - 200 });
  

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  const handleMouseDown = (e) => {
    const startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    const startY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;

    const initialTop = position.top;
    const initialLeft = position.left;

    const button = e.target.getBoundingClientRect();
    const maxTop = window.innerHeight - button.height;
    const maxLeft = window.innerWidth - button.width;

    const handleMouseMove = (moveEvent) => {
      const currentX = moveEvent.type === 'mousemove' ? moveEvent.clientX : moveEvent.touches[0].clientX;
      const currentY = moveEvent.type === 'mousemove' ? moveEvent.clientY : moveEvent.touches[0].clientY;

      const deltaX = currentX - startX;
      const deltaY = currentY - startY;

      // Calcul de la nouvelle position tout en vérifiant les limites
      const newTop = Math.min(Math.max(initialTop + deltaY, 0), maxTop);
      const newLeft = Math.min(Math.max(initialLeft + deltaX, 0), maxLeft);

      setPosition({
        top: newTop,
        left: newLeft
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);
  };

  if (!supportsPWA) {
    return null;
  }
  
  return (
    <div className="text-center">
    <button
      className="link-button"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        position: 'absolute'
      }}
    >
      Installer l'application
    </button>
    </div>
  );
};

export default InstallPWA;
