"use client"

import React, { useMemo } from "react"
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer"
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin"
import { EditorState, SerializedEditorState } from "lexical"

import { editorTheme } from "@/components/editor/themes/editor-theme"
import { TooltipProvider } from "@/components/ui/tooltip"
import { nodes } from "./nodes"
import { Plugins } from "./plugins"

const baseConfig: InitialConfigType = {
  namespace: "Editor",
  theme: editorTheme,
  nodes,
  onError: (error: Error) => console.error(error),
}

export function Editor({
  editorState,
  editorSerializedState,
  onChange,
  onSerializedChange,
}: {
  editorState?: EditorState
  editorSerializedState?: SerializedEditorState
  onChange?: (editorState: EditorState) => void
  onSerializedChange?: (editorSerializedState: SerializedEditorState) => void
}) {
  const safeInitialState =
    editorSerializedState ?? { root: { children: [], type: "root", version: 1 } }

  const editorConfig = useMemo<InitialConfigType>(
    () => ({
      ...baseConfig,
      editorState:
        editorState ??
        (() => safeInitialState),
    }),
    []
  )

  return (
    <div className="bg-background overflow-hidden rounded-lg border shadow">
      <LexicalComposer initialConfig={editorConfig}>
        <TooltipProvider>
          <Plugins />
          <OnChangePlugin
            ignoreSelectionChange
            onChange={(editorState) => {
              onChange?.(editorState)
              onSerializedChange?.(editorState.toJSON())
            }}
          />
        </TooltipProvider>
      </LexicalComposer>
    </div>
  )
}
