import './style.css'
import { LiquidGlass, PaintLayerCache } from '../packages/liquid-glass/src/index'

// Mejora de performance (opcional)
PaintLayerCache.useHtml2CanvasPro(true)

// Creamos el div que tendrá el efecto
const targetDiv = document.createElement('div')
targetDiv.id = 'glass-bar'
targetDiv.style.cssText = `
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2rem;
  z-index: 1000;
`
document.body.appendChild(targetDiv)

// Aplicamos el efecto "liquid glass"
const glassEffect = new LiquidGlass(
  targetDiv,
  `
    inset: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  {
    radius: 0, // sin bordes redondeados
    depth: 24,
  }
)

// Agregamos contenido dentro del div con efecto
glassEffect.content.innerHTML = `
  <span style="color: white; font-weight: bold;">Soy una barra con efecto líquido ✨</span>
`

// Agregamos el div con el efecto al contenedor
targetDiv.appendChild(glassEffect.element)
