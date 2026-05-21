import 'package:flutter/material.dart';
import 'screens/splash_screen.dart';
import 'screens/login_screen.dart';
import 'screens/home_screen.dart';
import 'screens/salon_detail_screen.dart';
import 'screens/booking_screen.dart';
import 'screens/my_bookings_screen.dart';
import 'screens/profile_screen.dart';
import 'screens/ai_analysis_screen.dart';
import 'screens/main_scaffold.dart';

void main() {
  runApp(const BeautyAIApp());
}

class BeautyAIApp extends StatelessWidget {
  const BeautyAIApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'BeautyAI',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFFFF2D55),
          primary: const Color(0xFFFF2D55),
          secondary: const Color(0xFF6366F1),
          surface: Colors.white,
        ),
        useMaterial3: true,
        fontFamily: 'Inter',
        scaffoldBackgroundColor: const Color(0xFFFAFAFA),
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => const SplashScreen(),
        '/login': (context) => const LoginScreen(),
        '/home': (context) => const MainScaffold(initialIndex: 0),
        '/ai-analysis': (context) => const MainScaffold(initialIndex: 1),
        '/bookings': (context) => const MainScaffold(initialIndex: 2),
        '/profile': (context) => const MainScaffold(initialIndex: 3),
      },
      onGenerateRoute: (settings) {
        if (settings.name?.startsWith('/salon/') ?? false) {
          final salonId = settings.name!.split('/').last;
          return MaterialPageRoute(
            builder: (context) => SalonDetailScreen(salonId: salonId),
          );
        }
        return null;
      },
    );
  }
}
