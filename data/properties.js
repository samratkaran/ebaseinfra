import { residential } from "./residential"
import { commercial } from "@/data/commercial"
import { otherProperty } from "./otherProperty"
import { kothiProperties } from "./kothi"
import { plotProperties } from "./plot"
import { foodcourtProperties } from "./foodcourt"

export { residential, commercial, otherProperty, kothiProperties, plotProperties, foodcourtProperties }

// Combined properties for search and other functions
export const allProperties = [
  ...residential,
  ...commercial,
  ...otherProperty,
  ...kothiProperties,
  ...plotProperties,
  ...foodcourtProperties,
]

