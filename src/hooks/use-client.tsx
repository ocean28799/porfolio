"use client"

import { useEffect, useState } from "react"

export function useIsClient() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}

export function useNoSSR<T>(clientValue: T, serverValue?: T): T {
  const [value, setValue] = useState<T>(serverValue ?? clientValue)
  const isClient = useIsClient()

  useEffect(() => {
    if (isClient) {
      setValue(clientValue)
    }
  }, [isClient, clientValue])

  return value
}
