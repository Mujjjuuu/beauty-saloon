import 'salon.dart';

class Booking {
  final String id;
  final String salonId;
  final String salonName;
  final String salonImage;
  final String serviceName;
  final double price;
  final DateTime date;
  final String time;
  final String status;

  Booking({
    required this.id,
    required this.salonId,
    required this.salonName,
    required this.salonImage,
    required this.serviceName,
    required this.price,
    required this.date,
    required this.time,
    required this.status,
  });
}
