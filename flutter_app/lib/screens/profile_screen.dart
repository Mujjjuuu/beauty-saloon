import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFAFAFA),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Column(
            children: [
              const SizedBox(height: 24),
              // Profile Header
              const CircleAvatar(
                radius: 60,
                backgroundImage: NetworkImage('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'),
              ),
              const SizedBox(height: 16),
              const Text(
                'Mujtaba Bilal Bela',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.w900),
              ),
              const Text(
                'hello@example.com',
                style: TextStyle(color: Colors.grey, fontWeight: FontWeight.w500),
              ),
              const SizedBox(height: 32),
              // Menu Items
              _buildMenuItem(Icons.person_outline, 'Edit Profile'),
              _buildMenuItem(Icons.payment_outlined, 'Payment Methods'),
              _buildMenuItem(Icons.settings_outlined, 'Settings'),
              _buildMenuItem(Icons.privacy_tip_outlined, 'Privacy Policy'),
              const SizedBox(height: 32),
              SizedBox(
                width: double.infinity,
                height: 64,
                child: TextButton(
                  onPressed: () => Navigator.pushNamedAndRemoveUntil(context, '/login', (route) => false),
                  style: TextButton.styleFrom(
                    foregroundColor: const Color(0xFFFF2D55),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                    backgroundColor: const Color(0xFFFF2D55).withOpacity(0.1),
                  ),
                  child: const Text('Logout', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildMenuItem(IconData icon, String title) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: const Color(0xFFF3F4F6)),
      ),
      child: Row(
        children: [
          Icon(icon, color: const Color(0xFF4B5563)),
          const SizedBox(width: 16),
          Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
          const Spacer(),
          const Icon(Icons.chevron_right, color: Colors.grey),
        ],
      ),
    );
  }
}
