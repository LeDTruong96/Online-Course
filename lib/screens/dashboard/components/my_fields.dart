import 'package:admin/constants.dart';
import 'package:admin/models/MyFiles.dart';
import 'package:admin/responsive.dart';
import 'package:flutter/material.dart';

import 'file_info_cards.dart';

class MyFields extends StatelessWidget {
  const MyFields({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final Size _size = MediaQuery.of(context).size;

    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              'My Files',
              style: Theme.of(context).textTheme.subtitle1,
            ),
            ElevatedButton.icon(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.symmetric(
                  horizontal: defaultPadding * (Responsive.isDesktop(context) ? 1.5 : 1),
                  vertical: defaultPadding * (Responsive.isDesktop(context) ? 1 : 0.7),
                ),
              ),
              icon: Icon(Icons.add),
              label: Text('Add New'),
            ),
          ],
        ),
        SizedBox(height: defaultPadding),
        Responsive(
          mobile: FileInfoCardGridView(
            crossAxisCount: _size.width < 600 ? 2 : 4,
            childAspectRatio: _size.width < 600 ? 1.4 : 1,
          ),
          tablet: FileInfoCardGridView(),
          desktop: FileInfoCardGridView(childAspectRatio: _size.width < 1400 ? 1.1 : 1.4),
        ),
        // GridView.builder(
        //   shrinkWrap: true,
        //   itemCount: demoMyFiels.length,
        //   gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        //     crossAxisCount: 4,
        //     crossAxisSpacing: defaultPadding,
        //     childAspectRatio: 1.1,
        //   ),
        //   itemBuilder: (context, index) => FileInfoCard(
        //     info: demoMyFiels[index],
        //   ),
        // ),
      ],
    );
  }
}

class FileInfoCardGridView extends StatelessWidget {
  const FileInfoCardGridView({
    Key key,
    this.crossAxisCount = 4,
    this.childAspectRatio = 1.0,
  }) : super(key: key);

  final int crossAxisCount;
  final double childAspectRatio;

  @override
  Widget build(BuildContext context) {
    return GridView.count(
      physics: NeverScrollableScrollPhysics(),
      shrinkWrap: true,
      crossAxisCount: crossAxisCount,
      crossAxisSpacing: defaultPadding,
      childAspectRatio: childAspectRatio,
      mainAxisSpacing: defaultPadding,
      children: List.generate(
        demoMyFiels.length,
        (index) => FileInfoCard(
          info: demoMyFiels[index],
        ),
      ),
    );
  }
}
