import { useEffect, useState } from "react"

export function useModelViewer() {
  const [modelViewerLoaded, setModelViewerLoaded] = useState(false)

  useEffect(() => {
    if (!modelViewerLoaded && typeof window !== "undefined") {
      if (!customElements.get("model-viewer")) {
        import("@google/model-viewer").then(() => {
          setModelViewerLoaded(true)
        })
      } else {
        setModelViewerLoaded(true)
      }
    }
  }, [modelViewerLoaded])

  return modelViewerLoaded
}

