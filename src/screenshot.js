function Screenshot() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          {/* <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {analysis.analysis_summary.primary_segments_identified} User Segments Identified
          </h2> */}
          <div className="flex flex-col gap-4">
              <div
                className="bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">Voucher Hunters</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border bg-red-50 text-red-700 border-red-200`}>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            Medium-high - requires points system modification and personalization engine
                          </div>
                        </span>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <span>7.2 actions/session</span>
                        <span>3.5 minutes avg duration</span>
                      </div>
                    </div>
                    <div className={`transform transition-transform ${selectedSegment === i ? 'rotate-90' : ''}`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {selectedSegment === i && (
                    <div className="mt-6 pt-6 border-t border-gray-100 space-y-6">
                      {/* User Journey */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">User Journey</h4>
                        <div className="flex items-center gap-2 overflow-x-auto pb-2">
                          {segment.user_journey.split(' → ').map((step, idx) => (
                            <React.Fragment key={idx}>
                              <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium mb-2">
                                  {idx + 1}
                                </div>
                                <div className="text-sm text-gray-700 text-center px-2 leading-tight">
                                  {step}
                                </div>
                              </div>
                              {idx < segment.user_journey.split(' → ').length - 1 && (
                                <div className="text-gray-300 flex-shrink-0 mt-[-12px]">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      {/* Friction Points */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Friction Points</h4>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <ul className="text-sm text-red-700 space-y-1">
                            {["Insufficient points for desired vouchers", "Partial points + cash payment options not implemented", "Limited understanding of points earning mechanisms", "Comparison shopping across multiple voucher options"].map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Strategic Recommendation */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Strategic Recommendation</h4>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <p className="text-sm text-green-800 mb-2 font-medium">
                          Implement personalized points-earning opportunities and partial points + cash payment options
                          </p>
                          <p className="text-sm text-green-700">
                            Expected impact: 40% reduction in voucher abandonment due to insufficient points
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
          </div>
        </div>
      </div>
    )
}

export default Screenshot;