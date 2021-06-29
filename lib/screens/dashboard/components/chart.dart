import 'package:admin/constants.dart';
import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';

class Chart extends StatelessWidget {
  const Chart({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 200,
      child: Stack(
        children: [
          PieChart(
            PieChartData(
              sectionsSpace: 0,
              centerSpaceRadius: 70,
              startDegreeOffset: -90,
              sections: pieChartSelectionDatas,
            ),
          ),
          Positioned.fill(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  '29.1',
                  style: Theme.of(context).textTheme.headline4.copyWith(
                        color: Colors.white,
                        fontWeight: FontWeight.w400,
                        // height: 0.5,
                      ),
                ),
                Text('of 128GB')
              ],
            ),
          )
        ],
      ),
    );
  }
}

List<PieChartSectionData> pieChartSelectionDatas = [
  PieChartSectionData(
    value: 15,
    color: Color(0xFF26E5FF),
    radius: 25,
    showTitle: false,
  ),
  PieChartSectionData(
    value: 20,
    color: Colors.green[600],
    radius: 24,
    showTitle: false,
  ),
  PieChartSectionData(
    value: 10,
    color: Colors.red,
    radius: 20,
    showTitle: false,
  ),
  PieChartSectionData(
    value: 25,
    color: primaryColor,
    radius: 30,
    showTitle: false,
  )
];
