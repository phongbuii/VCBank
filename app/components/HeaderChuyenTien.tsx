import { StyleSheet, View } from "react-native"
import React from "react"
import { Icon, IconTypes } from "./Icon"
import { WIDTH } from "@app/config/functions"
import { spacing } from "../theme"
import colors from "@app/assets/colors"
import fonts from "@app/assets/fonts"
import { Text } from "./Text"
type IItemProps = {
  title: string
  iconLeft?: IconTypes
  textLeft?: boolean
}
const HeaderChuyenTien: React.FC<IItemProps> = (props) => {
  const { title, iconLeft, textLeft } = props
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: WIDTH(spacing.md),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {!!iconLeft && <Icon icon={"back"} color="#000" />}
        {textLeft && (
          <Text text="VCB" size="xs" weight="bold">
            <Text>Digibank</Text>
          </Text>
        )}
        <Text
          style={{ marginHorizontal: WIDTH(spacing.md) }}
          weight="bold"
          size="md"
          text={title}
        />
      </View>
      <Icon icon={"ic_home"} color="#000" size={spacing.lg} />
    </View>
  )
}
export default HeaderChuyenTien

const styles = StyleSheet.create({
  title: {
    color: colors.black,
  },
})
