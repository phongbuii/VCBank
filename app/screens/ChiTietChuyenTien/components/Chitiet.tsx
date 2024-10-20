import { StyleSheet, Text, View } from "react-native"
import React from "react"
import colors from "@app/assets/colors"
import { getFont, HEIGHT, WIDTH } from "@app/config/functions"
import { spacing } from "@app/theme/spacing"
import { Icon } from "@app/components/Icon"
type ChitietProps = {}
const Chitiet: React.FC<ChitietProps> = (props) => {
  let DATA = [{ title: "Hinhf" }]
  return (
    <View style={styles.container}>
      <Pleaseconfirm />
    </View>
  )
}

export default Chitiet

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginHorizontal: WIDTH(spacing.md),
    borderRadius: spacing.sm,
    marginTop: HEIGHT(spacing.lg),
  },
})
const Pleaseconfirm: React.FC = () => (
  <View style={{ borderBottomWidth: 1, borderBottomColor: colors.gray_3 }}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: WIDTH(spacing.sm),
      }}
    >
      <Icon icon="add_circle" size={WIDTH(20)} />
      <Text
        style={{
          marginLeft: WIDTH(spacing.md),
          color: colors.black,
          fontSize: getFont(spacing.sm),
        }}
      >
        Quý khách vui lòng
        <Text style={{ color: colors.black, fontSize: getFont(spacing.sm), fontWeight: "600" }}>
          {" "}
          kiểm tra và xác nhận{" "}
        </Text>
        thông tin giao dịch
      </Text>
    </View>
  </View>
)
