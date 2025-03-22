export const generateStarsInSphere = (count: number, radius: number) => {
    const stars = []
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = radius + Math.random() * 5 // optional: add slight variation
  
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)
  
      stars.push({ x, y, z })
    }
    return stars
  }