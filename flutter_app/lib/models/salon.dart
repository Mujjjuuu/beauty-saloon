class Salon {
  final String id;
  final String name;
  final String image;
  final double rating;
  final String location;
  final String about;
  final List<Service> services;

  Salon({
    required this.id,
    required this.name,
    required this.image,
    required this.rating,
    required this.location,
    required this.about,
    required this.services,
  });
}

class Service {
  final String id;
  final String name;
  final double price;
  final String duration;
  final String icon;

  Service({
    required this.id,
    required this.name,
    required this.price,
    required this.duration,
    required this.icon,
  });
}
