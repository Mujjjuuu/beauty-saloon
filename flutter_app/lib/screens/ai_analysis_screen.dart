import 'package:flutter/material.dart';

class AIAnalysisScreen extends StatefulWidget {
  const AIAnalysisScreen({super.key});

  @override
  State<AIAnalysisScreen> createState() => _AIAnalysisScreenState();
}

class _AIAnalysisScreenState extends State<AIAnalysisScreen> {
  bool _isAnalyzing = false;
  bool _showResults = false;

  void _startAnalysis() async {
    setState(() {
      _isAnalyzing = true;
      _showResults = false;
    });

    await Future.delayed(const Duration(seconds: 3));

    if (mounted) {
      setState(() {
        _isAnalyzing = false;
        _showResults = true;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: const Text('AI Style Analysis', style: TextStyle(fontWeight: FontWeight.w900)),
        centerTitle: true,
        backgroundColor: Colors.white,
        elevation: 0,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          children: [
            if (!_showResults) ...[
              // Upload Section
              Container(
                width: double.infinity,
                height: 300,
                decoration: BoxDecoration(
                  color: const Color(0xFFF9FAFB),
                  borderRadius: BorderRadius.circular(32),
                  border: Border.all(color: const Color(0xFFE5E7EB), width: 2, style: BorderStyle.solid),
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    if (_isAnalyzing) ...[
                      const CircularProgressIndicator(color: Color(0xFFFF2D55)),
                      const SizedBox(height: 24),
                      const Text(
                        'Analyzing your features...',
                        style: TextStyle(fontWeight: FontWeight.bold, color: Color(0xFF4B5563)),
                      ),
                    ] else ...[
                      const Icon(Icons.add_a_photo_outlined, size: 64, color: Color(0xFF9CA3AF)),
                      const SizedBox(height: 16),
                      const Text(
                        'Upload a clear selfie',
                        style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                      ),
                      const SizedBox(height: 8),
                      const Text(
                        'For the best AI recommendations',
                        style: TextStyle(color: Color(0xFF6B7280)),
                      ),
                    ],
                  ],
                ),
              ),
              const SizedBox(height: 32),
              if (!_isAnalyzing)
                SizedBox(
                  width: double.infinity,
                  height: 64,
                  child: ElevatedButton(
                    onPressed: _startAnalysis,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xFFFF2D55),
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                    ),
                    child: const Text('Start Analysis', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                  ),
                ),
            ] else ...[
              // Results Section
              const Text(
                'Analysis Complete!',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.w900, color: Color(0xFFFF2D55)),
              ),
              const SizedBox(height: 24),
              Container(
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(
                  color: const Color(0xFFF3F4F6),
                  borderRadius: BorderRadius.circular(24),
                ),
                child: Column(
                  children: [
                    const Row(
                      children: [
                        Icon(Icons.face, color: Color(0xFFFF2D55)),
                        SizedBox(width: 12),
                        Text('Face Shape: Oval', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                      ],
                    ),
                    const SizedBox(height: 16),
                    const Text(
                      'Your oval face shape is highly versatile. We recommend styles that maintain balance and don\'t elongate the face further.',
                      style: TextStyle(color: Color(0xFF4B5563), height: 1.5),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 32),
              const Align(
                alignment: Alignment.centerLeft,
                child: Text('Recommended Styles', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w900)),
              ),
              const SizedBox(height: 16),
              GridView.count(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                crossAxisCount: 2,
                mainAxisSpacing: 16,
                crossAxisSpacing: 16,
                children: List.generate(4, (index) {
                  return Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20),
                      image: const DecorationImage(
                        image: NetworkImage('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400'),
                        fit: BoxFit.cover,
                      ),
                    ),
                    child: Container(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(20),
                        gradient: LinearGradient(
                          begin: Alignment.topCenter,
                          end: Alignment.bottomCenter,
                          colors: [Colors.transparent, Colors.black.withOpacity(0.7)],
                        ),
                      ),
                      padding: const EdgeInsets.all(12),
                      alignment: Alignment.bottomLeft,
                      child: const Text(
                        'Classic Taper',
                        style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
                      ),
                    ),
                  );
                }),
              ),
              const SizedBox(height: 32),
              SizedBox(
                width: double.infinity,
                height: 64,
                child: OutlinedButton(
                  onPressed: () => setState(() => _showResults = false),
                  style: OutlinedButton.styleFrom(
                    side: const BorderSide(color: Color(0xFFFF2D55)),
                    foregroundColor: const Color(0xFFFF2D55),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                  ),
                  child: const Text('Retake Photo', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}
