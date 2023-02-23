import React, { useState } from "react";

import Editor from "@monaco-editor/react";
import { EditorWrapper } from "./OutputScreenStyles";
import { EDITOR_HEIGHT } from "../constants";
import Title from "./Title";

export const OutputScreen = ({ onChange, output }
        : {onChange: (s: string, v: string) => void, output: any }) => {

    return (
        <>
            <Title>Generated Output:</Title>
            <EditorWrapper>
                {output}
            </EditorWrapper>
        </>
    );
};