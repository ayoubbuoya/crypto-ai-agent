import {
  DynamicRetrievalMode,
  GoogleSearchRetrievalTool,
} from "@google/generative-ai";

export const searchRetrievalTool: GoogleSearchRetrievalTool = {

  googleSearchRetrieval: {
    dynamicRetrievalConfig: {
      mode: DynamicRetrievalMode.MODE_DYNAMIC,
      dynamicThreshold: 0.7, // default is 0.7
      
    },
  },
};
