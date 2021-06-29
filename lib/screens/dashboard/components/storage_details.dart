import 'package:admin/constants.dart';
import 'package:flutter/material.dart';

import 'chart.dart';
import 'storage_info_card.dart';

class StorageDetails extends StatelessWidget {
  const StorageDetails({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(defaultPadding),
      decoration: BoxDecoration(
        color: secondaryColor,
        borderRadius: BorderRadius.all(Radius.circular(10)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Storage Details',
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.w500,
            ),
          ),
          SizedBox(height: defaultPadding),
          Chart(),
          StorageInfoCard(
            title: 'Documentes Files',
            srcSvg: 'assets/icons/Documents.svg',
            numberOfFiles: 1329,
            amountOfFiles: '13GB',
          ),
          StorageInfoCard(
            title: 'Media Files',
            srcSvg: 'assets/icons/media_file.svg',
            numberOfFiles: 1329,
            amountOfFiles: '15.3GB',
          ),
          StorageInfoCard(
            title: 'Other Files',
            srcSvg: 'assets/icons/folder.svg',
            numberOfFiles: 1329,
            amountOfFiles: '13GB',
          ),
          StorageInfoCard(
            title: 'Unknown Files',
            srcSvg: 'assets/icons/unknown.svg',
            numberOfFiles: 140,
            amountOfFiles: '13GB',
          )
        ],
      ),
    );
  }
}
