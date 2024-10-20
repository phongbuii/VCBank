import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Star, ChevronRight} from 'lucide-react-native';
import Svg, {Polyline, Circle} from 'react-native-svg';
import {HEIGHT, WIDTH} from '../../../../app/config/functions';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');
const CARD_PADDING = 16;
const GRAPH_WIDTH = WIDTH(180) - WIDTH(16);
const SIZE_ITEM = (GRAPH_WIDTH / 6) * 0.3;
const GRAPH_HEIGHT = 100;
const NUM_POINTS = 6;

const FinanceManagementCard = ({onExplorePress}) => {
  const data = [100, 30, 80, 100, 70, 80];

  const points = data
    .map((value, index) => {
      const x = (index / (NUM_POINTS - 1)) * GRAPH_WIDTH;
      const y = GRAPH_HEIGHT - (value / 100) * GRAPH_HEIGHT;
      return `${x},${y}`;
    })
    .join(' ');

  const pointsLine = data
    .map((value, index) => {
      const x = (index / (NUM_POINTS - 1)) * GRAPH_WIDTH + WIDTH(12);
      const y = GRAPH_HEIGHT - (value / 100) * GRAPH_HEIGHT;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Star color="#FFD700" size={20} />
          <Text style={styles.title}>Quản lý tài chính cá nhân</Text>
        </View>
        <TouchableOpacity style={styles.tryButton}>
          <Text style={styles.tryButtonText}>Dùng thử</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.graphContainer}>
          <View style={styles.bars}>
            {data.map(
              (value, index) => (
                console.log('value', value),
                (
                  <View key={index} style={styles.barColumn}>
                    <LinearGradient
                      start={{x: 0, y: 1}}
                      end={{x: 1, y: 0}}
                      colors={['#86C440', 'white']}
                      style={[
                        styles.bar,
                        {height: GRAPH_HEIGHT, justifyContent: 'flex-end'},
                      ]}>
                      <View
                        style={[
                          styles.bar,
                          {height: (value * GRAPH_HEIGHT) / 100, width: '100%'},
                        ]}
                      />
                    </LinearGradient>
                    <Text style={styles.monthLabel}>{`T${index + 1}`}</Text>
                  </View>
                )
              ),
            )}
          </View>
          <Svg
            height={GRAPH_HEIGHT}
            width={GRAPH_WIDTH}
            style={StyleSheet.absoluteFill}>
            <Polyline
              points={pointsLine}
              fill="none"
              stroke="#FFA500"
              strokeWidth="2"
            />
            {data.map((value, index) => {
              const x = (index / (NUM_POINTS - 1)) * GRAPH_WIDTH;
              const y = GRAPH_HEIGHT - (value / 100) * GRAPH_HEIGHT;
              return (
                <Circle
                  key={index}
                  cx={x + WIDTH(16)}
                  cy={y}
                  r="3"
                  fill="#FFA500"
                  stroke={'white'}
                  strokeWidth={2}
                />
              );
            })}
          </Svg>
        </View>

        <View style={styles.footer}>
          <Text style={styles.description}>
            Lập kế hoạch và quản lý chi tiêu hiệu quả
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={onExplorePress}></TouchableOpacity>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#86C440', '#006840']}
              style={styles.exploreButton}>
              <Text style={styles.exploreButtonText}>Khám phá ngay</Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: WIDTH(16),
    borderRadius: 12,
    paddingHorizontal: WIDTH(16),
    paddingVertical: HEIGHT(16),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 8,
  },
  tryButton: {
    backgroundColor: '#DC3545',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 16,
  },
  tryButtonText: {
    color: 'white',
    fontSize: 12,
  },
  graphContainer: {
    height: GRAPH_HEIGHT + 12 + 4,
    width: WIDTH(180),
    overflow: 'hidden',
    marginBottom: 16,
  },
  bars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'red',
    // height: "100%",
  },
  barColumn: {
    alignItems: 'center',
    width: GRAPH_WIDTH / NUM_POINTS,
    borderRadius: 100,
    overflow: 'hidden',
    height: 100 + 12 + 8,
    justifyContent: 'flex-end',
  },
  bar: {
    width: '30%',
    backgroundColor: '#4CAF50',
    alignSelf: 'center',
    borderRadius: 100,
  },
  monthLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#666',
  },
  footer: {
    flex: 1,
    paddingLeft: WIDTH(8),
  },
  description: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '700',
    flex: 1,
  },
  exploreButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 10,
  },
  exploreButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 4,
  },
});

export default FinanceManagementCard;
