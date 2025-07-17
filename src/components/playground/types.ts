// File types supported in the playground
export type FileType = 'html' | 'css' | 'js' | 'ts'

export interface PlaygroundFile {
  id: string
  name: string
  type: FileType
  content: string
}

export interface ProjectTemplate {
  id: string
  name: string
  files: PlaygroundFile[]
}
