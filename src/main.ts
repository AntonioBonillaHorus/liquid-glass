import './style.css'
import { LiquidGlass, PaintLayerCache } from '../packages/liquid-glass/src/index'

// Mejora de performance
PaintLayerCache.useHtml2CanvasPro(true)

// Creamos un contenedor para el efecto
const glassBar = new LiquidGlass(
  document.body,
  `
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 1rem;
  `,
  {
    radius: 0,   // sin bordes redondeados
    depth: 24,   // profundidad del efecto
  }
)

// Agregamos contenido opcional
glassBar.content.innerHTML = `<span style="color:white;">Liquid Glass Bar</span>`

// Añadir al body
document.body.appendChild(glassBar.element)
